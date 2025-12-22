import Dataimage, { listProyek } from "./data";
import { listTools, listTool, listPengalaman } from "./data";


function App() {
  return (
  <>
    <div className="asri grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-purple-700 w-fit p-4 rounded-2xl">
          <img src={Dataimage.LampImage} alt="Lamp Image" className="w-10 rounded-md" />
          <q>Investasi Terbaik ialah Investasi Pada Diri Sendiri.</q>
        </div>
        <h1 className="text-4xl/tight font-bold mb-6">Halo, Saya Asri Hardiansyah</h1>
        <p className="text-base/loose mb-6 opacity-55">Mahasiswa D3 Administrasi Bisnis Politeknik Negeri Pontianak, Saya memiliki ketertarikan di bidang keuangan dan administrasi 
        serta memiliki kemampuan dalam penggunaan Microsoft Office untuk membantu dalam melakukan administrasi dan keuangan .
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
            Download CV <i className="ri-download-fill ri-lg"></i>

          </a>
          <a href="#proyek" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
            Sertifikat <i className="ri-arrow-down-fill ri-lg"></i>
            </a>
        </div>
      </div>
      <img src={Dataimage.AsriImage} alt="Asri Image" className="w-500px md:ml-auto 
      animate__animated animate__fadeInUp animate__delay-4s" />
    </div>

    {/* Tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-purple-800 rounded-lg" 
      data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={Dataimage.AsriImage} alt="Asri Image" className="w-12 rounded-md mb-10 sm:hidden" />
        <p className="text-base/loose mb-10">
          Hi, Saya Asri Hardiansyah, Mahasiswa D3 Administrasi Bisnis Politeknik Negeri Pontianak, Saya percaya dengan Administrasi yang baik dapat membantu dalam meningkatkan efisiensi dan efektivitas dalam suatu perusahaan.
        </p>
        <div className="flex items-center justify-between"> 
          <img src={Dataimage.AsriImage} alt="Asri Image" className="w-24 rounded-md mb-5 sm:block hidden" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                1<span className="text-violet-500"></span>
              </h1>
              <p>Proyek Selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                1,5 th<span className="text-violet-500"></span>
              </h1>
              <p>Pengalaman Kerja</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools Website</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        Berikut ini adalah beberapa tools yang saya gunakan dalam pembuatan website.</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-purple-600 rounded-md hover:bg-purple-800 group" 
            key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-purple-700 p-1 group-hover:bg-violet-900" />
            <div> 
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}

          
        </div>
      </div>
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos-duration="1000">
          Tools Pekerjaan
          </h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut ini adalah beberapa tools yang saya gunakan untuk mendukung pekerjaan.
          </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTool.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-purple-600 rounded-md hover:bg-purple-800 group" 
            key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-purple-700 p-1 group-hover:bg-violet-900" />
            <div> 
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}

          
        </div>
      </div>
    </div>
    {/* Tentang */}

    {/* Proyek */}
    <div className="proyek mt-32 py-10" id="proyek">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">
        Proyek
        </h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
      Berikut ini adalah beberapa proyek yang telah saya kerjakan.
      </p>
      <div className="proyek-box item mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map((proyek) => (
          <div key={proyek.id} className="p-4 bg-violet-800 rounded-md" data-aos="fade-up" 
          data-aos-duration="1000" data-aos-delay={proyek.dad}>
            <img src={proyek.gambar} alt="Proyek Image" />
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p className="py-1 px-3 border border-purple-700 bg-purple-950 rounded-md font-semibold" key={index}>
                     {tool}
                  </p>
                ))}
              </div>
              <div>
                <a href="#" className="mt-4 inline-block bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
                  Lihat Proyek
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 {/* Proyek */}


    {/* Pengalaman */}
    <div className="pengalaman mt-32 py-10" id="pengalaman">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">
        Pengalaman
        </h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
      Berikut ini adalah pengalaman kerja saya.
      </p>
      <div className="pengalaman-box item mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listPengalaman.map(pengalaman => (
            <div key={pengalaman.id} className="p-4 bg-violet-800 rounde-md" data-aos="fade-up" 
          data-aos-duration="1000" data-aos-delay={pengalaman.dad}>
              <img src={pengalaman.gambar} alt="Pengalaman Image" />
              <div>
                <h1 className="font-bold">{pengalaman.Jabatan}</h1>
                <p className="opacity-50">{pengalaman.desk}</p>
                <div className="flex flex-wrap gap-2">
                </div>
                <div>
                  <a href="https://drive.google.com/file/d/14tIit1aKaPmB2e4vrcKZF756wvGpvNJG/view?usp=drive_link" target="_blank" rel="noopener noreferrer" 
                  className="text-center mt-2 inline-block bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
                  Download Surat Keterangan
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    {/* Pengalaman */}


    {/* Kontak */}
    <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        Kontak
        </h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
      Hubungi saya melalui email atau media sosial berikut.
      </p>
      <form action="https://formsubmit.co/asrihardiansyah@gmail.com" method="POST" 
      className="bg-violet-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" 
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama Lengkap</label>
            <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-white p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input type="email" name="email" placeholder="Masukkan Email..." className="border border-white p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="pesan">Pesan</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-white p-2 rounded-md" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-violet-900 p-3 rounded-lg w-full cursor-pointer border border-violet-950 hover:bg-violet-500">Kirim Pesan</button>
          </div>
        </div>
      </form>
    </div>

  </>
  );
};

export default App;
