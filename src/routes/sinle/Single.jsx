import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/index";

const Single = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return <div>
    <h2>{data?.title}</h2>
  </div>;
};

export default Single;
