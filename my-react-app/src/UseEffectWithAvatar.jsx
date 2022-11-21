import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [avatar, setAvatar] = useState();
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  return (
    <>
      <div>
        <input type="file" onChange={handlePreviewAvatar} />
      </div>
      <div>
        {avatar && <img src={avatar.preview} alt="image" width="80%" />}
      </div>
    </>
  );
};
export default App;
