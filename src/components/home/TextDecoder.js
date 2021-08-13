TextDecoder
    function printer(){
        var A=read_line();
        var B=read_line();
        var add=readInt();
        var fix=readInt();
        var lenA = A.length;
        var lenB = B.length;
        var minfix=Infinity;
        var curfix=0;
        var distance=lenB-lenA;
        for(let i=0;i<lenA;i++){
            if(A[i]!=B[i])
            curfix+=fix
        }
        minfix=curfix;
        for(let i=lenA;i<lenB;i++){
            curfix=0;
            for(let j=0;j<lenA;j++){
                if(A[j]!=B[i-j])
                curfix+=fix;
            }
            minfix=Math.min(minfix,curfix);
        }
        return minfix+distance*add;
    }
    function myass(){
        var n=readInt();
        var str = read_line();
        var oldarr = str.split(" ");
        var sumarr=[];
        for(let i=0;i<n;i++){
            if(oldarr[i]!=i+1){
                sumarr.push(oldarr[i]-(i+1));
            }else{
                sumarr.push(0);
            }
        }
        var sum=0;
        var re=0;
        for(let i=1;i<n;i++){
            sum+=sumarr[i-1];
            re+=sum;
        }
        print(re);
    }

    function FarmerNN( n ,  m ) {
        // write code here
        var m=m,n=n;
        var arr=[n];
        arr.fill(0);
        console.log(arr);
        var i=0;
        var str='saw'
        str.toLowerCase()
        var map = new Map();
        map.forEach((val,key)=>{
            if(val==)
        })
        var  add=1;
        while(m>0){
            arr[i]+=1;
            arr.findIndex()
            if(i==0){
                add=1
            }else if(i==n-1){
                add=-1
            }
            i+=add;
            m--;
        }
        return arr;
    }

printer(0,10000,0);

