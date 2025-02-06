import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { Product } from "@/sanity/schemaTypes/product"
import { groq } from "next-sanity"

interface ProductPageProps {
    params : Promise<{slug : string}>
}

async function getProduct(slug :string): Promise<Product | null> {
return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    product,
    _type,
    image,
    price,
    }`, {slug}
    
)
}


export default async function ProductPage({params}: ProductPage){
    const {slug} = await params;
    const product = await getProduct(slug)

    return(
        <div className="max-w-7xl mx-auto px-4">
            <div className=" grid grid-col-1 md:grid-cols-2 gap-12">
                <div className=" aspect-square">
                    {product.image && ( 
                        <image
                        src={urlFor(product.image).url()}
                        alt={product.Name}
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text axl font-bold">
                        {product.Name}
                        <p className="font-a">
                            {product.price}
                        </p>
                    </h1>
                </div>
            </div>
        </div>
    )
}