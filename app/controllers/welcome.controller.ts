/* app/controllers/welcome.controller.ts */
import path from 'path';
// Import only what we need from express
import { Router, Request, Response } from 'express';
import express from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();
const pagesStaticDir = path.join(__dirname, '../pages');
const imagesStaticDir = path.join(__dirname, '../res');
const controllersStaticDir = path.join(__dirname, '../controllers');
router.use(express.static(pagesStaticDir));
router.use(express.static(imagesStaticDir));
router.use(express.static(controllersStaticDir));

router.get('/', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../pages/main.html');
    res.sendFile(filePath);
  });

router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

    // Greet the given name
    res.send(`Hello, ${name}`);
});

// Export the express.Router() instance to be used by server.ts
export const WelcomeController: Router = router;