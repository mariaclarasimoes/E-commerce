import React from "react";

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-col text-center w-full ">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">TESTEMONIALS</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">HEAR FROM OUR CLIENTS</h1>
        </div>
      </div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://midias.correiobraziliense.com.br/_midias/jpg/2021/03/05/675x450/1_cbpfot020320212188-6556336.jpg" />
              <p className="leading-relaxed">It's amazing! I found unique and stylish clothes that perfectly reflect my taste. The staff was super attentive, providing an exceptional shopping experience. Definitely, my favorite store for women's fashion.</p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Amélie Bouchard</h2>
              <p className="text-gray-500">Paris, France</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/fotos-gratis/homem-bonito-posando-e-sorrindo_23-2149396133.jpg?w=360&t=st=1701821490~exp=1701822090~hmac=948683a5babf14bd281b2b1c4ed31756fa41c6ec39fdfb42bc9da79a432c6b84" />
              <p className="leading-relaxed">The store has a lovely variety of modern pieces. I loved the store ambiance, but I think they could expand the range of available sizes. Still, the quality of the clothes is excellent, and the design of the pieces is amazing.</p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Giovanni Moretti</h2>
              <p className="text-gray-500">Milan, Italy</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://diariodocomercio.com.br/wp-content/uploads/2022/08/mulher-na-politica-eleicoes.jpg" />
              <p className="leading-relaxed">This store is my top choice for finding the latest fashion trends. The collection is always updated, and the quality of the clothes is impressive. The staff is friendly and helpful, making each visit a positive experience. I recommend it to all fashion lovers!</p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Charlotte Williams</h2>
              <p className="text-gray-500">London, UK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
