import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Link from "next/link";

const buku = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-72 m-[-70px]">
        <h1 className="text-2xl pb-10">Daftar Buku</h1>
        <table className="table-auto">
          <thead>
            <tr className="bg-white border border-b-indigo-500">
              <th className="w-20">NO</th>
              <th className="w-60">Judul</th>
              <th className="w-60">Deskripsi</th>
              <th className="w-40">Gambar</th>
              <th className="w-40">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>Buku Satu</td>
              <td>Deskripsi Satu</td>
              <td>Gambar Satu</td>
              <td>
                <div>
                  <Link href="/components/formUbahBuku" className="bg-red-600 p-2 mr-2 rounded text-white">Ubah</Link>
                  <button className="bg-blue-500 p-2 rounded text-white">Hapus</button>
                </div>
              </td>
            </tr>
            <tr className="bg-white text-center">
              <td>2</td>
              <td>Buku Dua</td>
              <td>Deskripsi Dua</td>
              <td>Gambar Dua</td>
              <td>
                <div>
                  <Link href="/components/formUbahBuku" className="bg-red-600 p-2 mr-2 rounded text-white">Ubah</Link>
                  <button className="bg-blue-500 p-2 rounded text-white">Hapus</button>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td>3</td>
              <td>Buku Tiga</td>
              <td>Deskripsi Tiga</td>
              <td>Gambar Tiga</td>
              <td>
                <div>
                  <Link href="/components/formUbahBuku" className="bg-red-600 p-2 mr-2 rounded text-white">Ubah</Link>
                  <button className="bg-blue-500 p-2 rounded text-white">Hapus</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-5">
          <Link href="/components/formAddBuku" className="bg-blue-600 p-2 mr-2 rounded text-white">Tambah</Link>
        </div>
      </div>
    </>
  );
};

export default buku;
