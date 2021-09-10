import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { DropMenu } from "./styled";
import { GiShuriken } from "react-icons/gi";
import "./styles.css";

export const HideMenu = () => {
  const menu = useRef(null);
  const toast = useRef(null);

  const items = [
    {
      label: "Meteu essa?!",
      items: [
        {
          label: "Não tem televisão nessa casa??",
          icon: "pi pi-refresh",
          command: () => {
            toast.current.show({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Aí se perdeu",
          icon: "pi pi-times",
          command: () => {
            toast.current.show({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
      ],
    },
    {
      label: "Navigate",
      items: [
        {
          label: "React Website",
          icon: "pi pi-external-link",
          url: "https://reactjs.org/",
        },
        {
          label: "Router",
          icon: "pi pi-upload",
          command: (e) => {
            window.location.hash = "/fileupload";
          },
        },
      ],
    },
  ];

  return (
    <div>
      <div>
        <Menu
          model={items}
          popup
          ref={menu}
          id="popup_menu"
          className="hidemenu"
        />

        <DropMenu
          onMouseEnter={(event) => {
            menu.current.toggle(event);
          }}
          aria-controls="popup_menu"
          aria-haspopup
          className="shuriken"
        >
          <GiShuriken size={25} color="#000" />
        </DropMenu>
      </div>
    </div>
  );
};
