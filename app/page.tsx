'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    nama: '', jumlah: '1 Unit', tanggal: '', lokasi: '', acara: 'Hajatan / Wedding', catatan: ''
  });
  const [loading, setLoading] = useState(false);

  const chatWA = (pesan: string) => {
    window.open(`https://wa.me/6289504507088?text=${encodeURIComponent(pesan)}`, '_blank');
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama) return alert('Isi nama dulu ya!');
    
    setLoading(true);
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const pesan = `Halo Dio! Saya ${formData.nama}, mau booking Misty Fan LFi 26 Inch - ${formData.jumlah}, tanggal ${formData.tanggal || '-'}, lokasi ${formData.lokasi || 'Mojokerto'}, acara ${formData.acara}. Catatan: ${formData.catatan || '-'}. Boleh info harga by WA nya?`;
      chatWA(pesan);
      
      alert('Booking terkirim! Dio akan bales via WA 🙏');
      setFormData({ ...formData, nama: '', catatan: '' });
    } catch (error) {
      alert('Gagal simpan data, tapi langsung ke WA ya.');
      chatWA(`Halo Dio, mau tanya harga sewa Misty Fan`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-sky-50 text-slate-800 font-sans min-h-screen">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-sky-500 to-sky-700 text-white p-4 flex justify-between items-center shadow-md">
        <div>
          <b className="text-xl">💨 DIO RENTAL MISTYFAN</b>
          <br/><small className="text-xs opacity-90">Misty Fan • Mojokerto</small>
        </div>
        <button onClick={() => chatWA('Halo Dio, mau tanya sewa Misty Fan')} className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-full font-bold text-sm">
          💬 Chat WA
        </button>
      </header>

      <section className="max-w-3xl mx-auto mt-6 bg-white rounded-3xl overflow-hidden shadow-xl">
        <video controls autoPlay muted loop playsInline className="w-full max-h-[440px] object-cover bg-black" poster="https://arthurteknik.com/wp-content/uploads/2019/09/misty-fan3-435x400.png">
          <source src="/video-dio1.mp4" type="video/mp4" />
          Browser kamu tidak support video.
        </video>
        <div className="p-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full border border-sky-200">✅ VIDEO ASLI</span>
            <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full border border-sky-200">⚡ ANTAR + PASANG</span>
            <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full border border-sky-200">⭐ 4.9 (320+ Event)</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight">Sewa Misty Fan <span className="text-sky-600"></span><br/>Udah Terbukti di Konser Gede</h1>
          <p className="text-slate-500 mt-4 text-sm leading-relaxed">Ini video asli tim Dio pas event konser. Kipasnya nyala terus, tamu ribuan orang tetep adem. Buat Hajatan, Pengajian, Nikahan, Konser, Event Indoor/Semi Outdoor di Mojokerto & Sekitarnya.</p>
          <p className="text-sm text-slate-500 mt-2">📍 Mojokerto, Jawa Timur | 📞 WA: 0895-0450-7088 (Dio)</p>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="#booking" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full transition shadow-lg shadow-green-200 text-center">📅 CEK JADWAL & BOOKING</a>
            <button onClick={() => chatWA('Halo Dio, mau tanya harga sewa Misty Fan LFi')} className="flex-1 bg-white border-2 border-sky-600 text-sky-600 font-bold py-3 rounded-full hover:bg-sky-50 transition text-center">💰 TANYA HARGA</button>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3 mt-4 px-4">
        <div className="bg-white p-4 rounded-2xl text-center shadow-sm"><b className="text-xl text-sky-600">100+</b><br/><small className="text-slate-500 text-xs">Unit Ready</small></div>
        <div className="bg-white p-4 rounded-2xl text-center shadow-sm"><b className="text-xl text-sky-600">200+</b><br/><small className="text-slate-500 text-xs">Event Sukses</small></div>
        <div className="bg-white p-4 rounded-2xl text-center shadow-sm"><b className="text-xl text-sky-600">4.9/5</b><br/><small className="text-slate-500 text-xs">Rating</small></div>
      </div>

      {/* KATALOG GALERI FOTO & VIDEO BARU */}
      <section className="max-w-3xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">📸 Katalog Dokumentasi & Video</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Video Tambahan */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md">
            <video controls className="w-full h-56 object-cover bg-black">
              <source src="/video-dio2.mp4" type="video/mp4" />
              Browser kamu tidak support video.
            </video>
            <div className="p-4">
              <h3 className="font-bold text-lg">Video Event</h3>
              <p className="text-sm text-slate-500">Dokumentasi pemasangan unit.</p>
            </div>
          </div>

          {/* Foto Tambahan */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md">
            <img src="/foto-dio1.jpeg" alt="Foto Event" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">Foto Kegiatan</h3>
              <p className="text-sm text-slate-500">Misty Fan siap digunakan untuk acara Anda.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="max-w-xl mx-auto my-8 bg-white p-6 rounded-3xl shadow-xl mt-10">
        <h2 className="text-2xl font-bold mb-1">📅 Form Booking - Cek Jadwal</h2>
        <p className="text-sm text-slate-500 mb-6">Isi form ini, langsung ke-WA Dio. Harga akan diinfokan via WA.</p>
        
        <form onSubmit={handleBooking} className="space-y-4">
          <div>
            <label className="text-sm font-bold block mb-1">Nama Kamu / Panitia</label>
            <input type="text" required value={formData.nama} onChange={(e) => setFormData({...formData, nama: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="Contoh: Budi" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold block mb-1">Jumlah Unit</label>
              <select value={formData.jumlah} onChange={(e) => setFormData({...formData, jumlah: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 outline-none">
                <option>1 Unit</option><option>2 Unit</option><option>4 Unit</option><option>6 Unit</option><option>10 Unit</option><option>10+ Unit</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-bold block mb-1">Tanggal Acara</label>
              <input type="date" value={formData.tanggal} onChange={(e) => setFormData({...formData, tanggal: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 outline-none" />
            </div>
          </div>
          <div>
            <label className="text-sm font-bold block mb-1">Lokasi Acara</label>
            <input type="text" value={formData.lokasi} onChange={(e) => setFormData({...formData, lokasi: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 outline-none" placeholder="Contoh: Mojokerto Kota" />
          </div>
          <div>
            <label className="text-sm font-bold block mb-1">Jenis Acara</label>
            <select value={formData.acara} onChange={(e) => setFormData({...formData, acara: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 outline-none">
              <option>Hajatan / Wedding</option><option>Pengajian / Sholawatan</option><option>Konser / Pasar Malam</option><option>Sunatan / Ulang Tahun</option><option>Event Kantor / Sekolah</option><option>Lainnya</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold block mb-1">Catatan / Tanya Harga</label>
            <textarea rows={2} value={formData.catatan} onChange={(e) => setFormData({...formData, catatan: e.target.value})} className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 outline-none" placeholder="Tulis kebutuhan tambahan..."></textarea>
          </div>
          
          <button type="submit" disabled={loading} className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-green-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
            {loading ? 'Mengirim...' : '✅ KIRIM BOOKING VIA WA'}
          </button>
        </form>
      </section>

      <footer className="bg-slate-900 text-white text-center p-8 mt-12 text-sm leading-relaxed">
        DIO RENTAL MISTY FAN © 2026<br/>
        📍 Mojokerto, Jawa Timur - Melayani: ALL Jatim<br/>
        IG: @dio.rentalmistyfan • WA: 0895-0450-7088 (Dio)<br/>
        <span className="text-slate-400 mt-2 block">Dibuat untuk Dio • Sewa Adem, Acara Adem</span>
      </footer>
    </main>
  );
}