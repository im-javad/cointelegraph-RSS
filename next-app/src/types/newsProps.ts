import { ReactNode } from "react";
import { NewsItemType } from "./newsType";

export interface NewsFormProps {
  newTitle: string;
  newContent: string;
  newCreator: string;
  newLinkSource: string;
  newImgLink: string;
  setNewTitle: React.Dispatch<React.SetStateAction<string>>;
  setNewContent: React.Dispatch<React.SetStateAction<string>>;
  setNewCreator: React.Dispatch<React.SetStateAction<string>>;
  setNewImgLink: React.Dispatch<React.SetStateAction<string>>;
  setNewLinkSource: React.Dispatch<React.SetStateAction<string>>;
  editId: string | null;
  handleAddNews: () => void;
  handleSaveEdit: () => void;
}

export interface NewsItemProps {
  item: NewsItemType;
  handleEditNews: (
    id: string,
    title: string,
    content: string,
    creator: string,
    link: string,
    img: string
  ) => void;
  handleDeleteNews: (id: string) => void;
}

export interface NewsItemsProps {
  news: NewsItemType[];
  handleEditNews: (
    id: string,
    title: string,
    content: string,
    creator: string,
    link: string,
    img: string
  ) => void;
  handleDeleteNews: (id: string) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface NewsModalDoorProps {
  handleOpenModal: () => void;
}
