import axios from "axios";

export const createUpload = async (authtoken, formData) =>
  await axios.post(process.env.REACT_APP_SERVER_API + "/fileupload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      authtoken,
    },
  });

export const getFileAll = async (authtoken) =>
  await axios.post(
    process.env.REACT_APP_SERVER_API + "/getFileAll",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );

export const getDownload = async (authtoken, id_object) =>
  await axios.post(
    process.env.REACT_APP_SERVER_API + "/download",
    { data: id_object },
    {
      headers: {
        authtoken,
      },
      responseType: "blob",
    }
  );

// export const editFileImg = async (authtoken, formData) => {
//   await axios.post(
//     process.env.REACT_APP_SERVER_API + "/editFileImg",
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         authtoken,
//       },
//     }
//   );
// };

export const deleteFileSingle = async (authtoken, filename, id_object, type) =>
  await axios.post(
    process.env.REACT_APP_SERVER_API + "/deleteFileSingle",
    {
      filename: filename,
      type: type,
      id_object: id_object,
    },
    {
      headers: {
        authtoken,
      },
    }
  );

export const deleteFile = async (authtoken, id) =>
  await axios.get(process.env.REACT_APP_SERVER_API + "/delete", {
    headers: {
      authtoken,
    },
    params: { id },
  });
