import { Request, Response } from 'express';
import { CreateMovieService } from '../../services/movie/CreateMovie'

class CreateMovieController {
  async handle(req: Request, res: Response) {
    const { title, description } = req.body;

    const createMovieService = new CreateMovieService();


    const movie = await createMovieService.execute({ description, title });


    return res.json(movie)
  }
}

export { CreateMovieController }