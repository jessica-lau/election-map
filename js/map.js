var state = function(abbrev, capsName, fullname, id)
{
    this.nameAbbrev = abbrev;
    this.nameCAPS = capsName;
    this.nameFull = fullname;
    this.id = id;
 
    this.polys = [];
 
    this.colorBorder = g_map_borderColor;
    this.colorBorderHighlight = g_map_highlightBorderColor;
 
    this.rgbColorHighlight = g_map_highlightRGB;
    this.rgbColor = g_map_baseRGB;
 
    this.renderCount = -1;
    this.gradientOffset = 15;
    this.highlighted = false;
    this.counted = false;
 
    this.onClick = null;
}