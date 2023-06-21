import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { useEffect, useState } from "react";

const SwaggerPage = () => {
  const [swaggerJson, setSwaggerJson] = useState({});

  useEffect(() => {
    const fetchSwaggerJson = async () => {
      const res = await fetch("/api/swagger");
      const data = await res.json();
      setSwaggerJson(data);
    };

    fetchSwaggerJson();
  }, []);

  return <SwaggerUI spec={swaggerJson} />;
};

export default SwaggerPage;
