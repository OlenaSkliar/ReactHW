import React from 'react';
import styles from './menu.css';
import {CardsList} from "../../CardsList";
import {Dropdown} from "./Dropdown";
import {DropdownList} from "../../../DropdownList";
// import {generateId} from "../../../../utils/react/generateRandomIndex";

// const LIST =[
//     {value: 'some'},
//     {value: ' other some'},
//     {value: 'some'}
// ].map(generateId)

export function Menu() {
  return (
      <div className={styles.menu}>
              <Dropdown onOpen={()=>console.log('opened')}
                        onClose={()=>console.log('closed')}
                        isOpen={false}
                        button={
                            <button className={styles.menuButton} >
                                <svg width="20" height="5" viewBox="0 0 20 5" fill="none">
                                    <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
                                    <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
                                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
                                </svg>
                            </button>
                        }
              >
                <DropdownList />
              </Dropdown>
      </div>
  );
}
