---
layout: default
title: "Class: Spy"
prettify: true
---

* ways to create an instance
  * -- via --
    * `spyOn`
    * `spyOnProperty`
    * `jasmine.createSpy`
    * `jasmine.createSpyObj`
    * ❌NOT by constructor ❌
    
# Namespaces

* `calls`
  * see [here](Spy_calls.md)
    
# Members

## `callData`

* static
* `object`
  * == `this` context for the invocation
* `invocationOrder`
  * == invocation order
* `args`
  * == [] of arguments / -- passed for -- this invocation
* `returnValue`
  * == value / -- returned from -- this invocation 

## `and :SpyStrategy`

* see [SpyStrategy](SpyStrategy.md)
* allows
  * getting access to the ⚠️default ⚠️strategy -- for the -- spy
    * default == if the spy is called with arguments / -- NOT match -- any strategy / created with `Spy.withArgs`

# Methods
    
## `withArgs(args)`
    
* TODO
* Specifies a strategy to be used for calls to the spy that have the
specified arguments.









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        
        <th>Attributes</th>
        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>args</code></td>
            

            <td class="type">
            
                
<span class="param-type">*</span>


            
            </td>

            
                <td class="attributes">
                

                

                
                    &lt;repeatable><br>
                
                </td>
            

            

            <td class="description last"><p>The arguments to match</p></td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    
    <dt class="tag-since">Since:</dt>
    <dd class="tag-since"><ul class="dummy"><li>3.0.0</li></ul></dd>
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>















<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="SpyStrategy.html">SpyStrategy</a></span>


    </dd>
</dl>
