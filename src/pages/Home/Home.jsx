import { Community, Content, CTA, Features, Hero, Layout, Problem, Reason } from "../../components";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Problem />
            <Features />
            <Content />
            <Reason />
            <Community />
            <CTA />
            
        </Layout>
    );
}

export default Home;