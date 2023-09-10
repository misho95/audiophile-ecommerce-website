import { useState, useEffect } from "react";

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className="bg-customBlack text-white rounded-lg p-2 select-none pointer-events-none">
      Item's are add in cart
    </div>
  ) : null;
};

export default Notification;
