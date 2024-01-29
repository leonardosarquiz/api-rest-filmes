import { Request, Response } from 'express';
import { UpdateMovieService } from '../../services/movie/UpdateMovie'

class UpdateMovieController {
  async handle(req: Request, res: Response) {


    const { id } = req.params;
    const { title, description } = req.body;

    const updateMovie = new UpdateMovieService()

    const movie = await updateMovie.execute({ id, title, description })


    return res.json(movie)
  }
}

export { UpdateMovieController }