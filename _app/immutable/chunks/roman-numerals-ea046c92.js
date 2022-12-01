const t={title:"Roman Numerals",description:"I was interested in how roman numerals work and implemented a library for them",tags:["blog"],publishedDate:"2022-11-20T00:00:00.000Z"},e=`<h1>Roman Numerals</h1>
<p>Though it is not common knowledge, fractions were used by the romans in various forms, and since fractions are useful, I'll include them.
The lowest fraction is the dot which represents one twelth.
Using twelths has the benefit of easily representing common divisions such as 1/2, 1/3, 1/4, 1/6.
It can't represent 1/5 which the arabic decimal system easily can, but the arbic system can't represent 1/3, 1/5, or 1/6 as whole numbers, so overall dividing into 12 makes more common divisions easy.</p>
<h2>Table</h2>
<p>This is the value table that maps roman numerals to decimal numbers.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Symbol</th>
<th style="text-align:right">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">.</td>
<td style="text-align:right">1/12</td>
</tr>
<tr>
<td style="text-align:center">:</td>
<td style="text-align:right">2/12</td>
</tr>
<tr>
<td style="text-align:center">\u2234</td>
<td style="text-align:right">3/12</td>
</tr>
<tr>
<td style="text-align:center">\u2237</td>
<td style="text-align:right">4/12</td>
</tr>
<tr>
<td style="text-align:center">\u2059</td>
<td style="text-align:right">5/12</td>
</tr>
<tr>
<td style="text-align:center">S</td>
<td style="text-align:right">6/12</td>
</tr>
<tr>
<td style="text-align:center">I</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td style="text-align:center">V</td>
<td style="text-align:right">5</td>
</tr>
<tr>
<td style="text-align:center">X</td>
<td style="text-align:right">10</td>
</tr>
<tr>
<td style="text-align:center">L</td>
<td style="text-align:right">50</td>
</tr>
<tr>
<td style="text-align:center">C</td>
<td style="text-align:right">100</td>
</tr>
<tr>
<td style="text-align:center">D</td>
<td style="text-align:right">500</td>
</tr>
<tr>
<td style="text-align:center">M</td>
<td style="text-align:right">1000</td>
</tr>
</tbody>
</table>
<p>Working with integers is nicer than float points, so internally all numbers are represented by twelths of an I; the single-dot character.
I will only use the single dot characters since the unicode multi-dots are difficult to input anyway.</p>
`;export{t as a,e as h};
