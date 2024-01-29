import { Request, Response } from 'express';
import { RateMovieService } from '../../services/movie/RateMovie'

class RateMovieController {
  async handle(req: Request, res: Response) {

    const { id } = req.params;
    const { rating } = req.body;

    const rateMovieService = new RateMovieService()


    const rateMovie = await rateMovieService.execute({ id, rating })


    return res.json(rateMovie)
  }
}

export { RateMovieController }