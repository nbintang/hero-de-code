import React from "react";

export default function Maps(props: React.HTMLAttributes<HTMLIFrameElement>) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.656731070383!2d106.84129850094595!3d-6.372793799026745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec093dabf58d:0xd3365350a2ebe2f!2sMargoCity!5e0!3m2!1sid!2sid!4v1730163401341!5m2!1sid!2sid"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map of MargoCity"
      {...props}
    />
  );
}
