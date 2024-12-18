const rateReview = require('../entities/rateReview');

class agentViewRatingReviewController {

    // view all rating & reviews
    async agentViewRatingReview(req, res) {

        const agent_email = req.params.agent_email;

        try {
            const rateReviewInstance = new rateReview();
            const ratingReviews = await rateReviewInstance.getAgentRatingReview(agent_email);
            res.json(ratingReviews);
        }

        catch(error) {
            res.status(500).send({ message: error.message});
            console.error("Error fetching ratings and reviews: ", error);
        }
    }

    // hidden - for agent dashboard average rating display
    async agentRating(req, res) {
        const agentEmail = req.params.email;
        try {
            const rateReviewInstance = new rateReview();
            const ratings = await rateReviewInstance.getAgentRating(agentEmail);
            res.json(ratings);
        }

        catch(error) {
            res.status(500).send({ message: error.message});
            console.error("Error fetching ratings and reviews: ", error);
        }
    }

}

module.exports = agentViewRatingReviewController;