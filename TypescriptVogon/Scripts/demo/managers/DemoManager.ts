class DemoManager {

    SentimentStatusLookup: { [sentiment: number]: SweetAlert.AlertType };

    constructor() {
        this.SentimentStatusLookup = {};

        this.SentimentStatusLookup[Sentiments.Nice] = "success";
        this.SentimentStatusLookup[Sentiments.Mean] = "error";
        this.SentimentStatusLookup[Sentiments.Sarcastic] = "warning";
        
    }

    Respond = async (sentiment: Sentiments) => {

        let acc: DemoAccessor = new DemoAccessor();

        let responses = await acc.GetResponses();


        let filtered: DemoResponse[] = responses.filter((r: DemoResponse): any => {
            
            if (r.Sentiment == sentiment) return r;
        });

        swal("", filtered[0].Text, this.SentimentStatusLookup[sentiment]);
    }

}
