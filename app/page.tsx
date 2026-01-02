'use client'
export default function Home() {

  return (
    <>
      <div className="text-center mt-4">
        <h2 className="font-bold text-3xl mb-3">Welcome To Our Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero alias ullam asperiores modi dolorem iusto mollitia eligendi tempora autem totam.</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-end gap-2 mt-4">
        <input type="search" placeholder="Search...." className="bg-gray-400 rounded-[3px] p-1 pl-2"/>
        <button className="bg-blue-500 mr-4 p-3  cursor-pointer text-white">Search</button>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
          <div className="p-5 border border-blue-600 rounded-2xl cursor-pointer">
            <img src="/images/leaf.jpg" alt="leaf" className="rounded-2xl w-sm h-md" />
            <h5 className="font-bold text-[20px] mt-2">Title 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquid.</p>
          </div>
          <div className="p-5 border border-blue-600 rounded-2xl cursor-pointer">
            <img src="/images/leaf.jpg" alt="leaf" className="rounded-2xl w-sm h-md" />
            <h5 className="font-bold text-[20px] mt-2">Title 2</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquid.</p>
          </div>
          <div className="p-5 border border-blue-600 rounded-2xl cursor-pointer">
            <img src="/images/leaf.jpg" alt="leaf" className="rounded-2xl w-sm h-md" />
            <h5 className="font-bold text-[20px] mt-2">Title 3</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquid.</p>
          </div>
        </div>
      </div>
    </>
  );
}
