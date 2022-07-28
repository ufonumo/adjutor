<MultiSelect placeholder="Connect" handleChange={handleChange} icon={<img alt="" />}>
{new Array(5).fill(0).map((\_, index) => (
<option key={index}>China</option>
))}
</MultiSelect>
