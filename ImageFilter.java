public class ImageFilter 
{
	String img;
	String designerName;
	String[] styles;


	public ImageFilter(String i, String d, String[] s)
	{
		this.img = i;
		this.designerName = d;
		this.styles = s;
	}

	public void setImg(String image)
	{
		this.img = image;
	} 

	public String getImg()
	{
		return img;
	}

	public void setDesignerName(String name)
	{
		this.designerName = name;
	} 

	public String getDesignerName()
	{
		return designerName;
	}

	public void setStyle(String[] array)
	{
		this.styles = array;
	} 

	public String[] getStyle()
	{
		return styles;
	}
	public String toString()
	{
		return "Styles: " +Arrays.toString(styles);
	}	
