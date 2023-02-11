import React, {useState} from "react";
import './App.css';
import { Input, Button } from 'antd';
const { TextArea } = Input;
function App() {
    const [input, setInput] = useState("");
    const [arr, setArr] = useState([]);
    const [isTrue, setIsTrue] = useState(false);
    const [filteredArr, setFilteredArr] = new useState(arr);
    function handleTextChange(e) {
        setInput(e.target.value);
    }

    function filterBySearch(e){
        const query = e.target.value;
        let updatedList = [...arr];
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
        setFilteredArr(updatedList);
        setIsTrue(true);
    }

    function submitPost(){
        isTrue ? filteredArr.push(input) : arr.push(input);
        setInput("");
    }
    console.log(arr)

    return (
        <div>
            <div className="form">
                <TextArea rows={4} placeholder="type here" maxLength={200}
                          onChange={handleTextChange}
                />
                <Input style={{margin: "15px 0 15px 0"}} placeholder="search here"
                       onChange={filterBySearch}
                />
                <Button style={{marginLeft: "auto"}} onClick={submitPost}>Post</Button>
            </div>
            <div className="posts">
                {
                    filteredArr.map((post, index) => {
                        return (
                            <div key={index}
                                 style={{
                                     border: "1px solid gray",
                                     borderRadius: "10px",
                                     padding: "20px",
                                     width: "100%",
                                     marginBottom: "7px"
                                }}>
                                <p style={{fontSize: "18px", color: "gray"}}>{post}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default App
