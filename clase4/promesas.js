function downloadFile(url = "", status = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        const filedata = "pdf javascript avanzado - promesas";
        resolve({ filedata, status: 200, url });
      } else {
        reject({
          status: 404,
          ok: false,
          description: "Solicitud no permita",
        });
      }
    }, 2000);
  });
}

downloadFile("https://example.com/file.txt", true)
  .then((filedata) => {
    console.log("Archivo descargado: ", filedata);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Solicitud de datos finalizada");
  });

async function getFileData(status = false) {
  try {
    const response = await downloadFile("https://example.com/file.txt", status);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  console.log("Solicitud de datos finalizada");
}

getFileData(true);