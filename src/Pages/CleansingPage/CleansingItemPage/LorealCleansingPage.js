import React from "react";
import ImgSlider from "../../../Components/ProductItem/ImgSlider"
import DetailPage from '../../DetailProductPage/DetailPage'
import './index.css'
import Colors from "../../../Components/Colors/Colors";
import Rating from "../../../Components/Rating/Rating";
import $ from 'jquery'

class LorealCleansingPage extends React.Component{
    state = {
        products: [
            {
                "_id": "1",
                "title": "Loreal Cleansing",
                "src": [
                    "https://cocoshop.vn/uploads/shops/2019_10/tay-trang-sach-sau-3in1-loreal-400ml.jpg",
                    "https://beautybuffet.vn/wp-content/uploads/2020/03/60978565_833749703662832_8353287039361220608_n.png",
                    "https://beautyplaceblog.com/wp-content/uploads/2021/06/nuoc-tay-trang-LOreal-Paris-Micellar-Water-3-In-1-Moisturizing.jpg"
                ],
                "description": "Nước tẩy trang Loreal",
                "content": "Nước Tẩy Trang L'Oréal Paris là dòng sản phẩm tẩy trang đến từ thương hiệu L'Oreal Paris, được ứng dụng công nghệ Micellar dịu nhẹ giúp làm sạch da, lấy đi bụi bẩn, dầu thừa và cặn trang điểm chỉ trong một bước, mang lại làn da thông thoáng, mềm mượt mà không hề khô căng.",
                "price":"128000đ",
                "colors":["pink","blue","green"],
                "count": 1
            }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index => {
        this.setState({index:index})
        const images = this.myRef.current.children;
        for(let i = 0; i< images.length;i++){
            images[i].className = images[i].className.replace("active","");
        }
        images[index].className = "active";
    }

    _modalPopup = () => {
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
          })
    }
    
    componentDidMount(){
        const {index}= this.state
        this.myRef.current.children[index].className = "active"
    }

    render(){
        const {products, index}= this.state
        return(
            <div>
            <div className="app">
                {
                    products.map(item => (
                        <div className="details">
                            <div className="big-img">
                                <img src={item.src[index]} alt=""/>
                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>{item.price}</span>
                                </div>
                                {/* <Colors colors={item.colors}/> */}
                                <p>{item.description}</p>
                                <p>{item.content}</p>

                                <div className="thumb" ref={this.myRef}>
                                    {
                                        item.src.map((img, index) => (
                                            <img src={img} alt=""
                                            key={index}
                                            onClick={() => this.handleTab(index)} 
                                            />
                                        ))
                                    }
                                    
                                </div>
                                <button className="cart">Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="container-fluid">
                <div className="col-md-2">
                    <h3>Gửi đánh giá sản phẩm</h3>
                </div>
                <div className="col-md-1">
                    <Rating/>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">Gửi đánh giá</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Scarletty</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Cảm ơn bạn đã đánh giá
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>
                </div>
                
                
            </div>
                
            </div>
        );
    }
}

export default LorealCleansingPage;
