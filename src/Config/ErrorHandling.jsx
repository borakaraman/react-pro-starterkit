import { notification } from "antd";

const ErrorHandling = (props) => {
  let Error;
  if (props.code === 401) {
    Error = notification["warning"]({
      message: "Geçersiz İstek!",
      description:
        "Sunucu, isteğin kötü biçimlendirilmiş istek sözdizimi veya geçersiz istek mesajı çerçevesi nedeniyle işlenemedi.",
    });
  }
  if (props.code === 404) {
    Error = notification["info"]({
      message: "Sonuç Bulunamadı!",
      description: " Sunucu, istenen kaynağı bulamadı.",
    });
  }
  if (props.code === 500) {
    Error = notification["error"]({
      message: "İç Sunucu Hatası",
      description:
        "Sunucu, beklenmeyen bir durumla karşılaştığını belirten genel bir hata mesajı.",
    });
  }
  return Error;
};

export default ErrorHandling;
