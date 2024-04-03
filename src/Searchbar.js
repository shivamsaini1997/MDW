import React, { useEffect, useState } from "react";
import axios from "axios";

function Searchbar() {
          const [inputValue, setInputValue] = useState("");
          const [searchHistory, setSearchHistory] = useState([]);
          const [show, setShow] = useState(false);
          const [modalVisible, setModalVisible] = useState(false);
          const [titles, setTitles] = useState([]);

          const handleInputChange = async (event) => {
                    const value = event.target.value;
                    setInputValue(value);

                    if (value) {
                              setShow(true);
                    }

                    try {
                              const res = await axios.post(
                                        'http://192.168.1.74:8000/Contributor/Filter_Suggetions_By_Title',
                                        { title: value }
                              );

                              if (res.data.title_list) {
                                        const items = res.data.title_list.map(titleObject => titleObject.title);
                                        setTitles(items);

                                        // Log the titles in the console
                                        console.log("Titles:", items);
                              } else {
                                        console.log("No titles found in the response");
                              }

                              // Log the entire response in the console
                              console.log("API Response:", res.data);
                    } catch (error) {
                              console.error('Error making axios request:', error);
                    }
          };

          useEffect(() => {
                    console.log("Titles updated:", titles);
          }, [titles]);

          const handleSearch = async () => {
                    if (inputValue.trim() !== "") {
                              setSearchHistory((prevHistory) => [...prevHistory, inputValue]);
                    }
          };

          const showData = () => {
                    setShow(true);
          };

          const hideData = () => {
                    setShow(false);
          };

          const handleInputClick = () => {
                    setModalVisible(true);
          };

          const Modal = () => {
                    return (
                              <div>
                                        <h3>{inputValue}</h3>
                                        <ul>
                                                  {titles.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                  ))}
                                        </ul>
                                        <button onClick={() => setModalVisible(false)}>remove</button>
                              </div>
                    );
          };

          return (
                    <div>
                              <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onFocus={showData}
                                        onBlur={hideData}
                                        onClick={handleInputClick}
                                        placeholder="Enter search term..."
                              />
                              <button onClick={handleSearch}>Search</button>

                              {modalVisible && <Modal />}
                    </div>
          );
}

export default Searchbar;
