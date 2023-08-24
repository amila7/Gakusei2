import styled from "styled-components";



const TabContainer = styled.div`
     width: 100%;
    height: 44px;
    
    @media (max-width: 800px) {
        padding: 0 5px;
    }
    `
const Home = () => {

return (
    <>
            <TabContainer>
                <div>
                    <span className="border">おすすめ</span>
                    <span>マイリスト</span>
                    <span>ピックアップ</span>
                </div>
            </TabContainer>

                </>

);
}

export default Home;