import React, { useState, useEffect } from "react";
import "./App.css";
import LayOut from "./Components/LayOut/LayOut";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";
import Loader from "./Components/Loader/Loader";

let router = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { path: "/", element: <Home /> },
      { path: "elmasa", element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  const [loading, setLoading] = useState(true); // حالة التحميل

  // محاكاة التأخير في تحميل المكونات
  useEffect(() => {
    // سيتم إخفاء الـ Loader بعد 3 ثواني
    const timer = setTimeout(() => {
      setLoading(false); // بعد 3 ثوانٍ، نقوم بإخفاء الـ Loader
    }, 3000);

    // تنظيف المؤقت إذا تم إلغاء المكون
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // عرض الـ Loader أثناء التحميل
      ) : (
        <RouterProvider router={router} /> // عرض مكونات الـ Router بعد التحميل
      )}
      {!loading && <></>} {/* إضافة رسالة تأكيد بعد التحميل */}
    </div>
  );
}
