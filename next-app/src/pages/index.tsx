import { addNews, deleteNews, editNews, fetchNews } from "@/store/newsSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsModal from "@/components/newsModal";
import NewsForm from "@/components/newsForm";
import NewsItems from "@/components/newsItems";
import NewsModalDoor from "@/components/newsModalDoor";
import ServerError from "@/components/serverError";
import Loader from "@/components/loader";
import { toast } from "react-toastify";

export default function NewsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { news, status, error } = useSelector((state: RootState) => state.news);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const [newTitle, setNewTitle] = useState<string>("");
  const [newContent, setNewContent] = useState<string>("");
  const [newCreator, setNewCreator] = useState<string>("");
  const [newLinkSource, setNewLinkSource] = useState<string>("");
  const [newImgLink, setNewImgLink] = useState<string>(
    "https://images.cointelegraph.com/images/840_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjQtMDgvNjJhOWU5MTEtNDNhMi00Y2M0LTkyYTEtZjQ4MTlkOGYwZGI1.jpg"
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const setterState = (alsoEditId: boolean, modalStatus: boolean) => {
    if (alsoEditId) {
      setEditId(null);
    }
    setNewTitle("");
    setNewContent("");
    setNewCreator("");
    setNewLinkSource("");
    setNewImgLink(
      "https://images.cointelegraph.com/images/840_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjQtMDgvNjJhOWU5MTEtNDNhMi00Y2M0LTkyYTEtZjQ4MTlkOGYwZGI1.jpg"
    );
    setIsModalOpen(modalStatus);
  };

  const handleAddNews = () => {
    if (
      !newTitle.trim() ||
      !newContent.trim() ||
      !newCreator.trim() ||
      !newLinkSource.trim() ||
      !newImgLink.trim()
    ) {
      toast.error("Please fill the form correctly!");
      return;
    }
    dispatch(
      addNews({
        title: newTitle,
        contentSnippet: newContent,
        link: newLinkSource,
        date: new Date().toISOString(),
        image: newImgLink,
        creator: newCreator,
      })
    );
    setterState(false, false);
    toast.success("The new news was added");
  };
  const handleEditNews = (
    id: string,
    title: string,
    content: string,
    creator: string,
    link: string,
    img: string
  ) => {
    setEditId(id);
    setNewTitle(title);
    setNewContent(content);
    setNewCreator(creator);
    setNewLinkSource(link);
    setNewImgLink(img);
    setIsModalOpen(true);
  };
  const handleSaveEdit = () => {
    if (
      !newTitle.trim() ||
      !newContent.trim() ||
      !newCreator.trim() ||
      !newLinkSource.trim() ||
      !newImgLink.trim()
    ) {
      toast.error("Please fill the form correctly!");
      return;
    }
    if (editId) {
      dispatch(
        editNews({
          id: editId,
          title: newTitle,
          contentSnippet: newContent,
          link: newLinkSource,
          date: new Date().toISOString(),
          image: newImgLink,
          creator: newCreator,
        })
      );
      setterState(true, false);
      toast.success("Edited was done");
    }
  };
  const handleDeleteNews = (id: string) => {
    dispatch(deleteNews(id));
  };
  const handleOpenModal = () => {
    setterState(true, true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section id="news">
      <div
        className={`container mx-auto px-4 ${
          isModalOpen ? "h-[100vh] overflow-hidden blur-xl" : ""
        }`}
      >
        {error && <ServerError />}
        {!(status === "loading") ? (
          <>
            <NewsModalDoor handleOpenModal={handleOpenModal} />

            <NewsModal isOpen={isModalOpen} onClose={handleCloseModal}>
              <NewsForm
                newTitle={newTitle}
                newContent={newContent}
                newCreator={newCreator}
                newLinkSource={newLinkSource}
                newImgLink={newImgLink}
                setNewTitle={setNewTitle}
                setNewContent={setNewContent}
                setNewCreator={setNewCreator}
                setNewImgLink={setNewImgLink}
                setNewLinkSource={setNewLinkSource}
                editId={editId}
                handleAddNews={handleAddNews}
                handleSaveEdit={handleSaveEdit}
              />
            </NewsModal>
            <NewsItems
              news={news}
              handleEditNews={handleEditNews}
              handleDeleteNews={handleDeleteNews}
            />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}
