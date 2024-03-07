import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string;
    containerStyles? :string;
    handleClick? :
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" | "reset" | undefined;
}

export interface searchManufactureProps{
    manufacturer : string;
    setManufacturer :(manufacturer:string)=> void;

}