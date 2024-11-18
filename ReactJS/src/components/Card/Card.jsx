import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import { Link } from "react-router-dom";

export default function Card({product}) {
  return (
    <Link to={`/products/${product.slug}` ?? ''} className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#88aac2] hover:ring-opacity-40 active:ring-5 active:ring-[#9B7EBD] hover:ring-4 active:ring-2 active:ring-opacity-90" >
    <div className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#88aac2]" >
          <img src={product.imageUrl ?? ''} alt={product.name ?? 'No name'} className="block max-h-[300px] mb-4 object-cover" />
            <div className="flex flex-col gap-2">
                <h4 className="font-medium text-[20px] text-red">{product.name ?? 'No Name'}</h4>
                <span className="block font-medium text-[14px] text-[#4C0033]">{product.category ?? 'Uncatagorized'}</span>
                <span className="block font-medium text-[20px] text-black">{formatToIDRCurrency(product.price) ?? 'Not for sale'}</span>
                <div>
                {product.stock <= 0 ? (
                    <p className="text-xl font-semibold text-center text-red-500">Out of Stock</p>
                  ) : (product.stock <= 10 && product.stock !== 0) ? (
                    <>
                       <p className="text-xl font-semibold text-center text-[#eed202]">Almost Sold Out</p>
                        <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#47677d] text-white active:bg-[#19242c]">
                          <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                          <span>Add to cart</span>
                        </Button>
                    </>
                 
                  ) : (
                    <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#47677d] text-center text-white active:bg-[#19242c]">
                      <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                      <span>Add to cart</span>
                    </Button>
                  )}
                </div>
            </div>
          </div>
          </Link>
  )
}

Card.propTypes = {
  product: PropTypes.object
}