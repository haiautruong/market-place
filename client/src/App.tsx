import { useState, use } from 'react';
import {
  Layout,
  Typography,
  Card,
  Button,
  Rate,
  Badge,
  Tag,
  Statistic,
  Row,
  Col,
  Divider,
} from 'antd';
import {
  ShoppingCartOutlined,
  HeartOutlined,
  StarOutlined,
  UserOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

// Simulate fetching products
const fetchProducts = async () => {
  // Simulating API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 99.99,
      rating: 4.5,
      image: 'https://via.placeholder.com/300',
      description: 'High-quality sound with noise cancellation',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 149.99,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      description: 'Track fitness and receive notifications',
    },
    {
      id: 3,
      name: 'Wireless Speaker',
      price: 79.99,
      rating: 4.2,
      image: 'https://via.placeholder.com/300',
      description: 'Portable speaker with deep bass',
    },
    {
      id: 4,
      name: 'Ultra HD Camera',
      price: 199.99,
      rating: 4.7,
      image: 'https://via.placeholder.com/300',
      description: 'Capture stunning photos and videos',
    },
  ];
};

// Create a promise for products
const productsPromise = fetchProducts();

function App() {
  const [count, setCount] = useState(0);

  // Use the React 19 'use' hook to handle the promise
  const products = use(productsPromise);

  return (
    <Layout className='layout'>
      <Header className='header'>
        <div className='logo-container'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
          <img src={reactLogo} className='logo react' alt='React logo' />
          <Title level={4} style={{ color: 'white', margin: 0 }}>
            Marketplace
          </Title>
        </div>
        <div className='header-icons'>
          <Button type='text' icon={<UserOutlined />} style={{ color: 'white' }} />
          <Button type='text' icon={<HeartOutlined />} style={{ color: 'white' }} />
          <Badge count={3} size='small'>
            <Button type='text' icon={<ShoppingCartOutlined />} style={{ color: 'white' }} />
          </Badge>
        </div>
      </Header>

      <Content className='site-content'>
        <div className='hero-section'>
          <Title>Welcome to Our Marketplace</Title>
          <Paragraph>Built with Vite, React 19, TypeScript, and Ant Design</Paragraph>
          <div className='stats-row'>
            <Row gutter={16}>
              <Col span={8}>
                <Card>
                  <Statistic
                    title='Active Visitors'
                    value={count}
                    prefix={<UserOutlined />}
                    suffix={
                      <Button
                        type='primary'
                        size='small'
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        Refresh
                      </Button>
                    }
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic title='Products' value={150} prefix={<ShoppingOutlined />} />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title='Satisfied Customers'
                    value={98.5}
                    suffix='%'
                    prefix={<StarOutlined />}
                    precision={1}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <Divider orientation='left'>
          <Title level={2}>Featured Products</Title>
        </Divider>

        <Row gutter={[16, 24]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Badge.Ribbon text='Sale' color='red'>
                <Card
                  hoverable
                  cover={<img alt={product.name} src={product.image} />}
                  actions={[
                    <Rate disabled defaultValue={product.rating} />,
                    <Button type='primary' icon={<ShoppingCartOutlined />}>
                      Add to Cart
                    </Button>,
                  ]}
                >
                  <Meta
                    title={product.name}
                    description={
                      <>
                        <Tag color='blue'>${product.price.toFixed(2)}</Tag>
                        <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
                      </>
                    }
                  />
                </Card>
              </Badge.Ribbon>
            </Col>
          ))}
        </Row>
      </Content>

      <Footer className='site-footer'>
        <Text>&copy; {new Date().getFullYear()} Marketplace App. All rights reserved.</Text>
      </Footer>
    </Layout>
  );
}

export default App;
