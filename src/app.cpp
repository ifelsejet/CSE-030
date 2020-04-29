#include <server.h>
#include <search.h>

using namespace ucm;


int main(int argc, char** argv){

    // Do not delete this line. It initializes the data store.
    init();

    Server server(argc, argv);

    server.renderHTML("/", "index.html");

    server.route("/getAll", [&](const request& req, response& res){
        ucm::json jimgs = getAll();
        res.sendJSON(jimgs);
    });    
    server.route("/search", [&](const request& req, response& res){
        if (req.has_params({"query"})){
            ucm::json jimgs = search(req.url_params.get("query"));

            res.sendJSON(jimgs);
        }
        else{
            res.sendError400();
        }

    });    

    server.run();
}
