var algorithms = {
  mst: {
    edges: [],
    calculate: function(points,edges){
      // sort the given edges ascending by length
      edges.sort(function(a,b){
        if(a.length < b.length){ return -1; }
        if(a.length > b.length){ return 1; }
        return 0;
      });

      // empty the cache
      this.edges = [];

      // give each point it’s own class
      for(var i=0; i<points.length; i++){
        points[i].mstClass = i;
      }

      // add edges that connect two classes
      for(var j=0; j<edges.length; j++){
        var edge = edges[j];
        var a = points[edge.a];
        var b = points[edge.b];

        // if the edge connects two classes, use the edge and combine the classes
        if(a.mstClass !== b.mstClass){
          this.edges.push(edge);
          this.updatePoints(points,a.mstClass,b.mstClass);
        }

        // if we have n-1 edges, we are done
        if(this.edges.length === points.length-1){
          break;
        }
      }
      return this.edges;
    },
    updatePoints: function(points,oldClass,newClass){
      // set all the points in oldClass to be in newClass
      for(var i=0; i<points.length; i++){
        if(points[i].mstClass === oldClass){
          points[i].mstClass = newClass;
        }
      }
    }
  }
};
