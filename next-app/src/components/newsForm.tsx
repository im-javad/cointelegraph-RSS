import { NewsFormProps } from "@/types/newsProps";

const NewsForm: React.FC<NewsFormProps> = ({
  newTitle,
  newContent,
  newCreator,
  newLinkSource,
  newImgLink,
  setNewTitle,
  setNewContent,
  setNewCreator,
  setNewLinkSource,
  setNewImgLink,
  editId,
  handleAddNews,
  handleSaveEdit,
}) => {
  const inputFields = [
    {
      value: newTitle,
      setter: setNewTitle,
      placeholder: "Title",
      type: "text",
    },
    {
      value: newCreator,
      setter: setNewCreator,
      placeholder: "Creator",
      type: "text",
    },
    {
      value: newLinkSource,
      setter: setNewLinkSource,
      placeholder: "Source Link",
      type: "text",
    },
    {
      value: newImgLink,
      setter: setNewImgLink,
      placeholder: "Image Link",
      type: "text",
    },
  ];

  return (
    <div className="form-area">
      <div className="form-inputs">
        {inputFields.map((field, index) => (
          <div className="input-group mb-5" key={index}>
            <input
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              type={field.type}
              placeholder={field.placeholder}
              className="input input-bordered input-info w-full"
            />
          </div>
        ))}
        <div className="input-group mb-12">
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="Content"
            rows={3}
            className="textarea textarea-info w-full"
          ></textarea>
        </div>
      </div>
      <div className="form-btn flex justify-center">
        <button
          className="btn btn-outline btn-accent w-full md:w-1/2"
          onClick={editId ? handleSaveEdit : handleAddNews}
        >
          {editId ? "Save Edit" : "Add to News"}
        </button>
      </div>
    </div>
  );
};

export default NewsForm;
