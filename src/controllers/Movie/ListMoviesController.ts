import { Request, Response } from 'express';
import { ListMovieService } from '../../services/movie/ListMovies'

class ListMovieController {
  async handle(req: Request, res: Response) {


    const listMovies = new ListMovieService();
    const movies = await listMovies.execute()


    return res.json(movies)
  }
}

export { ListMovieController }