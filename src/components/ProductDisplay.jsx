import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    const [mainImage, setMainImage] = useState(product.image)
    const [selectedSize, setSelectedSize] = useState('UK 8')

    const sizes = ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
    const thumbnails = [product.image, product.image1, product.image2, product.image3].filter(Boolean)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0'>
            {}
            <div className='flex md:1/2 gap-4'>
                <div className='flex flex-col gap-4 md:h-[500px]'>
                    {thumbnails.map((img, index) => (
                        <img
                            key={index}
                            onClick={() => setMainImage(img)}
                            src={img}
                            alt=""
                            className={`md:h-[163px] h-[75px] md:w-[100px] w-[120px] object-cover cursor-pointer border-2 transition-all ${
                                mainImage === img ? 'border-yellow-400 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
                            }`}
                        />
                    ))}
                </div>
                <div className='overflow-hidden'>
                    <img 
                        src={mainImage} 
                        alt={product.name} 
                        className='md:h-[580px] md:w-[480px] w-[600px] object-cover rounded-md' 
                    />
                </div>
            </div>

            {}
            <div className='flex md:1/2 flex-col mt-8 md:mt-0'>
                <h1 className='text-foreground text-4xl font-bold'>{product.name}</h1>
                
                {}
                <div className='flex items-center gap-1 text-gray-300 text-lg mt-4'>
                    <Star className='w-5 h-5 text-yellow-400 fill-yellow-400' />
                    <Star className='w-5 h-5 text-yellow-400 fill-yellow-400' />
                    <Star className='w-5 h-5 text-yellow-400 fill-yellow-400' />
                    <Star className='w-5 h-5 text-yellow-400 fill-yellow-400' />
                    <Star className='w-5 h-5 text-gray-500 fill-gray-500' />
                    <p className='ml-2 text-sm text-gray-400'>(122)</p>
                </div>

                <div className='flex gap-5 font-semibold items-center my-5'>
                    <div className='text-gray-500 text-2xl line-through'>${product.old_price}</div>
                    <div className='text-[#138695] text-3xl'>${product.new_price}</div>
                </div>

                <div className='text-gray-300 leading-relaxed'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore voluptatem nesciunt facere totam suscipit illum laboriosam nulla, corporis amet consequuntur, fugiat modi voluptate libero?
                </div>

                {}
                <div>
                    <h2 className='font-semibold text-gray-300 text-2xl mt-4'>Select Size</h2>
                    <div className='flex flex-wrap gap-4 items-center my-4'>
                        {sizes.map((size) => (
                            <button
                                key={size}
                                type='button'
                                onClick={() => setSelectedSize(size)}
                                className={`border p-4 transition-colors cursor-pointer font-medium ${
                                    selectedSize === size
                                        ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                                        : 'border-gray-600 bg-gray-800/50 text-foreground hover:bg-gray-700/50'
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <Link to='/cart' className='w-max'>
                    <button 
                        onClick={() => { addToCart(product.id, selectedSize) }} 
                        className='bg-[#138695] hover:bg-[#0f6c78] transition-colors text-white font-semibold px-8 py-3 my-4 rounded shadow-md'
                    >
                        ADD TO CART
                    </button>
                </Link>

                <p className='text-gray-300 mt-2'><span className='font-semibold text-white'>Category :</span> Sports, Gym, Running</p>
                <p className='text-gray-300'><span className='font-semibold text-white'>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay