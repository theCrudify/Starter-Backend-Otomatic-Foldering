const fs = require('fs');
const path = require('path');

// Struktur folder dan file yang akan dibuat
const structure = {
  "src": {
    "controllers": ["userController.ts", "productController.ts"],
    "routes": ["userRoutes.ts", "productRoutes.ts"],
    "middleware": ["authMiddleware.ts", "errorMiddleware.ts", "loggerMiddleware.ts"],
    "services": ["userService.ts", "productService.ts"],
    "repositories": ["userRepository.ts", "productRepository.ts"],
    "prisma": ["schema.prisma"],
    "config": ["database.ts", "jwt.ts", "env.ts"],
    "utils": ["hashPassword.ts", "generateToken.ts", "formatDate.ts"],
    "constants": ["roles.ts", "errorMessages.ts"],
    "logs": ["app.log"],
    "tests": ["user.test.ts", "product.test.ts"],
    "docs": ["api.yaml"],
    "": ["server.ts"] // Root files inside src
  },
  "": [".env", "package.json", "tsconfig.json", "README.md"] // Root project files
};

// Fungsi untuk membuat folder dan file
const createStructure = (basePath, structure) => {
  Object.entries(structure).forEach(([folder, filesOrSubFolders]) => {
    const currentPath = path.join(basePath, folder);
    
    if (folder !== "") {
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath, { recursive: true });
        console.log(`📁 Created folder: ${currentPath}`);
      }
    }

    if (Array.isArray(filesOrSubFolders)) {
      filesOrSubFolders.forEach(file => {
        const filePath = path.join(currentPath, file);
        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, ""); // Buat file kosong
          console.log(`📄 Created file: ${filePath}`);
        }
      });
    } else {
      createStructure(currentPath, filesOrSubFolders);
    }
  });
};

// Jalankan script untuk membuat struktur
console.log("🚀 Setting up project structure...");
createStructure(__dirname, structure);
console.log("✅ Project setup completed!");
