import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import ReactDOM from "react-dom";

import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact";
import { NodeService } from "../service/NodeService";
import { TieredMenu } from "primereact/tieredmenu";

const DataTableGridLinesDemo = () => {
  const [nodes, setNodes] = useState([]);
  const nodeService = new NodeService();

  useEffect(() => {
    nodeService.getTreeTableNodes().then((data) => console.log(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const menu = useRef(null);
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      items: [
        {
          /* label:'New',
                      icon:'pi pi-fw pi-plus',
                      items:[
                      {
                          label:'Bookmark',
                          icon:'pi pi-fw pi-bookmark'
                      },
                      {
                          label:'Video',
                          icon:'pi pi-fw pi-video'
                      },
                      ]
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-trash'
                  },
                  {
                      separator:true
                  },
                  {
                      label:'Export',
                      icon:'pi pi-fw pi-external-link'
                      */
        }
      ]
    },
    {
      label: "Services",
      icon: "pi pi-fw pi-cog",
      items: [
        {
          label: "Kafka-Ops-Helper",
          icon: "pi pi-fw pi-user"
        },
        {
          label: "New-app-Onboarder",
          icon: "pi pi-fw pi-th-large"
        },
        {
          label: "Certificate Management",
          icon: "pi pi-fw pi-briefcase"
        }
      ]
    },
    {
      label: "Drift Monitor",
      icon: "pi pi-fw pi-desktop",
      items: [
        {
          label: "Rules",
          icon: "pi pi-fw pi-file-edit"
        },
        {
          label: "Configure",
          icon: "pi pi-fw pi-cog"
        }
      ]
    },

    {
      label: "Tools",
      icon: "pi pi-fw pi-wrench",
      items: [
        {
          label: "Network-Ops-Helper",
          icon: "pi pi-fw pi-wifi",
          items: []
        },
        {
          label: "Tlf-radar-generator",
          icon: "pi pi-fw pi-calendar-times",
          items: []
        }
      ]
    },
    {
      label: "Docs",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus"
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus"
            }
          ]
        },
        {
          label: "Archieve",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus"
            }
          ]
        }
      ]
    },
    {
      label: "Contact Us",
      icon: "pi pi-fw pi-phone",
      items: [
        {
          label: "call",
          icon: "pi pi-fw pi-phone",
          items: [
            /*{
                          label:'email',
                          icon:'pi pi-fw pi-envelop'
                      },
                      {
                          label:'Delete',
                          icon:'pi pi-fw pi-calendar-minus'
                      }*/
          ]
        },
        {
          label: "email",
          icon: "pi pi-fw pi-envelope",
          items: [
            /*{
                          label:'Remove',
                          icon:'pi pi-fw pi-calendar-minus'
                      }*/
          ]
        }
      ]
    },
    {
      separator: true
    },
    {
      label: "Logout",
      icon: "pi pi-fw pi-power-off"
    }
  ];
  return (
    <div>
      <h5>Autumn</h5>
      <div className="card" style={{ display: "flex" }}>
        <TieredMenu model={items} />

        <div className="divstyle">
          <h2>
            HC status:
            <a href="https://istweb.apple.com/austin/en/status">
              https://istweb.apple.com/austin/en/status
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<DataTableGridLinesDemo />, rootElement);
