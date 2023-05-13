import React from "react"
import { Image, Container} from "react-bootstrap";

const DetailPost =()=>{
    return(
        <>
            <div className="detailPost">
                <Image className="bigImagePost"></Image>
                <Container>
                    <h3 className="postTitle"></h3>
                    <p className="postParagraph"></p>
                </Container>
            </div>
        </>
    )
}

export default DetailPost