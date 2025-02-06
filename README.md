# Starter Backend Automatic Foldering

## Overview
This script automatically generates a structured folder and file hierarchy for a backend project using Node.js and TypeScript. It simplifies the initial setup by creating essential directories and files needed for backend development.

## Folder Structure
```
/project-root
│   .env
│   package.json
│   tsconfig.json
│   README.md
│
└─── src
    │   server.ts
    │
    ├─── controllers
    │       userController.ts
    │       productController.ts
    │
    ├─── routes
    │       userRoutes.ts
    │       productRoutes.ts
    │
    ├─── middleware
    │       authMiddleware.ts
    │       errorMiddleware.ts
    │       loggerMiddleware.ts
    │
    ├─── services
    │       userService.ts
    │       productService.ts
    │
    ├─── repositories
    │       userRepository.ts
    │       productRepository.ts
    │
    ├─── prisma
    │       schema.prisma
    │
    ├─── config
    │       database.ts
    │       jwt.ts
    │       env.ts
    │
    ├─── utils
    │       hashPassword.ts
    │       generateToken.ts
    │       formatDate.ts
    │
    ├─── constants
    │       roles.ts
    │       errorMessages.ts
    │
    ├─── logs
    │       app.log
    │
    ├─── tests
    │       user.test.ts
    │       product.test.ts
    │
    ├─── docs
    │       api.yaml
```

## Usage
1. Ensure you have **Node.js** installed.
2. Save the script as `setup.js` or another filename.
3. Run the script using the following command:
   ```sh
   node setup.js
   ```
4. The script will automatically generate the folder structure.

## Notes
- Modify the generated files as needed to fit your project requirements.
- Ensure `.env` is properly configured before running the backend services.




