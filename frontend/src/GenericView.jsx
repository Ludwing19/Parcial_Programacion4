import axios from "axios";
import { useEffect, useState } from "react";
import { GenericItem } from "./components/GenericItem";
import { GenericList } from "./components/GenericList";

export const GenericView = (props) => {
  const [landing, setLanding] = useState();
  useEffect(() => {
    axios
      .get(props.values(), props.headers)
      .then((res) => {
        console.log(res.data)
        setLanding(res.data)
      });
  }, []);
  return (
    <div className="row">
      <GenericList List={landing}>
        {landing?.map((item) => (
          <GenericItem
            key={item.Id}
            Title={item.Title}
            Description={item.Description}
            img_url={item.img_url}
          ></GenericItem>
        ))}
      </GenericList>
    </div>
  );
};
