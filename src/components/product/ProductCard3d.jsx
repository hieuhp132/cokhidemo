import { Canvas } from "@react-three/fiber";
import ProductModel from "./ProductModel";

export default function ProductCard3D({ product, onOpen }) {
  return (
    <div
      onClick={() => onOpen(product)}
      style={{
        background: "#14181d",
        border: "1px solid #2a2f36",
        padding: 12,
        cursor: "pointer",
      }}
    >
      <div style={{ height: 160 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <ProductModel product={product} />
        </Canvas>
      </div>

      <div style={{ marginTop: 8 }}>
        <strong>{product.name}</strong>
        <div style={{ fontSize: 13, opacity: 0.7 }}>
          {product.material}
        </div>
      </div>
    </div>
  );
}
