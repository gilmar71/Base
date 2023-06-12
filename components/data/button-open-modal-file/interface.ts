import { Dispatch, SetStateAction } from "react";

export interface IButtonOpenVideoProps {
  url?: string;
  path?: string;
  children: React.ReactNode;
  type: "image" | "video";
  personalModal?: boolean;
  setPersonalModal?: Dispatch<SetStateAction<boolean>>
}
