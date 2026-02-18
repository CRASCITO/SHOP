:root {
  --bg: #f5f5f5;
  --card: #ffffff;
  --text: #111;
  --muted: #888;
  --accent: #006039;
}

[data-theme="dark"] {
  --bg: #0f0f0f;
  --card: #1a1a1a;
  --text: #f1f1f1;
  --muted: #aaa;
}

body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: 0.4s;
}

.product-container {
  display: flex;
  gap: 50px;
  padding: 50px;
}

.image-wrapper {
  width: 420px;
  overflow: hidden;
  border-radius: 18px;
}

#mainImage {
  width: 100%;
  transition: transform 0.6s ease;
}

.image-wrapper:hover #mainImage {
  transform: scale(1.2);
}

#thumbnails {
  display: flex;
  gap: 12px;
  margin-top: 18px;
}

#thumbnails img {
  width: 65px;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;
}

#thumbnails img:hover {
  opacity: 1;
  transform: scale(1.1);
}

.details h1 {
  font-size: 32px;
}

.mrp {
  text-decoration: line-through;
  color: var(--muted);
}

.sell {
  color: var(--accent);
  font-size: 26px;
  margin-left: 10px;
}

button {
  padding: 14px 28px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.4s;
}

.add-cart {
  background: #111;
  color: white;
}

.buy-now {
  background: linear-gradient(45deg, gold, #d4af37);
}

button:hover {
  transform: translateY(-4px) scale(1.05);
}

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  padding: 12px;
  background: var(--card);
  border: none;
  cursor: pointer;
}
