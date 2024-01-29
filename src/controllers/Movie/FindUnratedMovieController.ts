import { Request, Response } from 'express';
import { FindUnrateMovieService } from '../../services/movie/FindUnratedMovie'

class FindUnratedMovieController {
  async handle(req: Request, res: Response) {

    const findUnrateMovie = new FindUnrateMovieService()

    const movies = await findUnrateMovie.execute()


    return res.json(movies)
  }
}

export { FindUnratedMovieController }