const useContactWA= () => {
    const dataWangsaff: { nomor: string; pesan: string } = {
        nomor: "6285777816578",
        pesan: `Halo, saya tertarik dengan konsultasi anda!👋`,
      };
      const encodedPesan = encodeURIComponent(dataWangsaff.pesan);
      const whatsappUrl: string = `https://wa.me/${dataWangsaff.nomor}?text=${encodedPesan}`;
      return whatsappUrl;
}

export default useContactWA